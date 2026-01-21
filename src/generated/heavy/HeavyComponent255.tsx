'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly255<T> = T extends (infer U)[]
  ? DeepReadonlyArray255<U>
  : T extends object
  ? DeepReadonlyObject255<T>
  : T;

interface DeepReadonlyArray255<T> extends ReadonlyArray<DeepReadonly255<T>> {}

type DeepReadonlyObject255<T> = {
  readonly [P in keyof T]: DeepReadonly255<T[P]>;
};

type UnionToIntersection255<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf255<T> = UnionToIntersection255<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push255<T extends unknown[], V> = [...T, V];

type TuplifyUnion255<T, L = LastOf255<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push255<TuplifyUnion255<Exclude<T, L>>, L>;

type DeepPartial255<T> = T extends object
  ? { [P in keyof T]?: DeepPartial255<T[P]> }
  : T;

type Paths255<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join255<K, Paths255<T[K], Prev255[D]>> : never }[keyof T]
  : never;

type Prev255 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join255<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig255 {
  level1: {
    level2: {
      level3: {
        value: string;
        count: number;
        enabled: boolean;
        items: Array<{ id: number; name: string }>;
      };
    };
  };
}

type ConfigPaths255 = Paths255<NestedConfig255>;

interface HeavyProps255 {
  config: DeepPartial255<NestedConfig255>;
  path?: ConfigPaths255;
}

const HeavyComponent255 = memo(function HeavyComponent255({ config }: HeavyProps255) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 255) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-255 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H255: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent255.displayName = 'HeavyComponent255';
export default HeavyComponent255;

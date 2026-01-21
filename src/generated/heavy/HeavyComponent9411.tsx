'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly9411<T> = T extends (infer U)[]
  ? DeepReadonlyArray9411<U>
  : T extends object
  ? DeepReadonlyObject9411<T>
  : T;

interface DeepReadonlyArray9411<T> extends ReadonlyArray<DeepReadonly9411<T>> {}

type DeepReadonlyObject9411<T> = {
  readonly [P in keyof T]: DeepReadonly9411<T[P]>;
};

type UnionToIntersection9411<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf9411<T> = UnionToIntersection9411<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push9411<T extends unknown[], V> = [...T, V];

type TuplifyUnion9411<T, L = LastOf9411<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push9411<TuplifyUnion9411<Exclude<T, L>>, L>;

type DeepPartial9411<T> = T extends object
  ? { [P in keyof T]?: DeepPartial9411<T[P]> }
  : T;

type Paths9411<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join9411<K, Paths9411<T[K], Prev9411[D]>> : never }[keyof T]
  : never;

type Prev9411 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join9411<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig9411 {
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

type ConfigPaths9411 = Paths9411<NestedConfig9411>;

interface HeavyProps9411 {
  config: DeepPartial9411<NestedConfig9411>;
  path?: ConfigPaths9411;
}

const HeavyComponent9411 = memo(function HeavyComponent9411({ config }: HeavyProps9411) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 9411) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-9411 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H9411: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent9411.displayName = 'HeavyComponent9411';
export default HeavyComponent9411;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8605<T> = T extends (infer U)[]
  ? DeepReadonlyArray8605<U>
  : T extends object
  ? DeepReadonlyObject8605<T>
  : T;

interface DeepReadonlyArray8605<T> extends ReadonlyArray<DeepReadonly8605<T>> {}

type DeepReadonlyObject8605<T> = {
  readonly [P in keyof T]: DeepReadonly8605<T[P]>;
};

type UnionToIntersection8605<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8605<T> = UnionToIntersection8605<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8605<T extends unknown[], V> = [...T, V];

type TuplifyUnion8605<T, L = LastOf8605<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8605<TuplifyUnion8605<Exclude<T, L>>, L>;

type DeepPartial8605<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8605<T[P]> }
  : T;

type Paths8605<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8605<K, Paths8605<T[K], Prev8605[D]>> : never }[keyof T]
  : never;

type Prev8605 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8605<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8605 {
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

type ConfigPaths8605 = Paths8605<NestedConfig8605>;

interface HeavyProps8605 {
  config: DeepPartial8605<NestedConfig8605>;
  path?: ConfigPaths8605;
}

const HeavyComponent8605 = memo(function HeavyComponent8605({ config }: HeavyProps8605) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8605) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8605 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8605: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8605.displayName = 'HeavyComponent8605';
export default HeavyComponent8605;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2570<T> = T extends (infer U)[]
  ? DeepReadonlyArray2570<U>
  : T extends object
  ? DeepReadonlyObject2570<T>
  : T;

interface DeepReadonlyArray2570<T> extends ReadonlyArray<DeepReadonly2570<T>> {}

type DeepReadonlyObject2570<T> = {
  readonly [P in keyof T]: DeepReadonly2570<T[P]>;
};

type UnionToIntersection2570<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2570<T> = UnionToIntersection2570<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2570<T extends unknown[], V> = [...T, V];

type TuplifyUnion2570<T, L = LastOf2570<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2570<TuplifyUnion2570<Exclude<T, L>>, L>;

type DeepPartial2570<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2570<T[P]> }
  : T;

type Paths2570<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2570<K, Paths2570<T[K], Prev2570[D]>> : never }[keyof T]
  : never;

type Prev2570 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2570<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2570 {
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

type ConfigPaths2570 = Paths2570<NestedConfig2570>;

interface HeavyProps2570 {
  config: DeepPartial2570<NestedConfig2570>;
  path?: ConfigPaths2570;
}

const HeavyComponent2570 = memo(function HeavyComponent2570({ config }: HeavyProps2570) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2570) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2570 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2570: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2570.displayName = 'HeavyComponent2570';
export default HeavyComponent2570;

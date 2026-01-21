'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2253<T> = T extends (infer U)[]
  ? DeepReadonlyArray2253<U>
  : T extends object
  ? DeepReadonlyObject2253<T>
  : T;

interface DeepReadonlyArray2253<T> extends ReadonlyArray<DeepReadonly2253<T>> {}

type DeepReadonlyObject2253<T> = {
  readonly [P in keyof T]: DeepReadonly2253<T[P]>;
};

type UnionToIntersection2253<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2253<T> = UnionToIntersection2253<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2253<T extends unknown[], V> = [...T, V];

type TuplifyUnion2253<T, L = LastOf2253<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2253<TuplifyUnion2253<Exclude<T, L>>, L>;

type DeepPartial2253<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2253<T[P]> }
  : T;

type Paths2253<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2253<K, Paths2253<T[K], Prev2253[D]>> : never }[keyof T]
  : never;

type Prev2253 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2253<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2253 {
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

type ConfigPaths2253 = Paths2253<NestedConfig2253>;

interface HeavyProps2253 {
  config: DeepPartial2253<NestedConfig2253>;
  path?: ConfigPaths2253;
}

const HeavyComponent2253 = memo(function HeavyComponent2253({ config }: HeavyProps2253) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2253) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2253 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2253: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2253.displayName = 'HeavyComponent2253';
export default HeavyComponent2253;

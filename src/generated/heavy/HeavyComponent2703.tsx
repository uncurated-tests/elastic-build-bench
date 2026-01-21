'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2703<T> = T extends (infer U)[]
  ? DeepReadonlyArray2703<U>
  : T extends object
  ? DeepReadonlyObject2703<T>
  : T;

interface DeepReadonlyArray2703<T> extends ReadonlyArray<DeepReadonly2703<T>> {}

type DeepReadonlyObject2703<T> = {
  readonly [P in keyof T]: DeepReadonly2703<T[P]>;
};

type UnionToIntersection2703<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2703<T> = UnionToIntersection2703<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2703<T extends unknown[], V> = [...T, V];

type TuplifyUnion2703<T, L = LastOf2703<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2703<TuplifyUnion2703<Exclude<T, L>>, L>;

type DeepPartial2703<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2703<T[P]> }
  : T;

type Paths2703<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2703<K, Paths2703<T[K], Prev2703[D]>> : never }[keyof T]
  : never;

type Prev2703 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2703<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2703 {
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

type ConfigPaths2703 = Paths2703<NestedConfig2703>;

interface HeavyProps2703 {
  config: DeepPartial2703<NestedConfig2703>;
  path?: ConfigPaths2703;
}

const HeavyComponent2703 = memo(function HeavyComponent2703({ config }: HeavyProps2703) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2703) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2703 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2703: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2703.displayName = 'HeavyComponent2703';
export default HeavyComponent2703;

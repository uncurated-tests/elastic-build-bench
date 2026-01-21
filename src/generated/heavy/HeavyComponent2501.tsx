'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2501<T> = T extends (infer U)[]
  ? DeepReadonlyArray2501<U>
  : T extends object
  ? DeepReadonlyObject2501<T>
  : T;

interface DeepReadonlyArray2501<T> extends ReadonlyArray<DeepReadonly2501<T>> {}

type DeepReadonlyObject2501<T> = {
  readonly [P in keyof T]: DeepReadonly2501<T[P]>;
};

type UnionToIntersection2501<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2501<T> = UnionToIntersection2501<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2501<T extends unknown[], V> = [...T, V];

type TuplifyUnion2501<T, L = LastOf2501<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2501<TuplifyUnion2501<Exclude<T, L>>, L>;

type DeepPartial2501<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2501<T[P]> }
  : T;

type Paths2501<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2501<K, Paths2501<T[K], Prev2501[D]>> : never }[keyof T]
  : never;

type Prev2501 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2501<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2501 {
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

type ConfigPaths2501 = Paths2501<NestedConfig2501>;

interface HeavyProps2501 {
  config: DeepPartial2501<NestedConfig2501>;
  path?: ConfigPaths2501;
}

const HeavyComponent2501 = memo(function HeavyComponent2501({ config }: HeavyProps2501) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2501) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2501 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2501: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2501.displayName = 'HeavyComponent2501';
export default HeavyComponent2501;

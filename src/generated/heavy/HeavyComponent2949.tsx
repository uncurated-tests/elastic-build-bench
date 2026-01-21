'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2949<T> = T extends (infer U)[]
  ? DeepReadonlyArray2949<U>
  : T extends object
  ? DeepReadonlyObject2949<T>
  : T;

interface DeepReadonlyArray2949<T> extends ReadonlyArray<DeepReadonly2949<T>> {}

type DeepReadonlyObject2949<T> = {
  readonly [P in keyof T]: DeepReadonly2949<T[P]>;
};

type UnionToIntersection2949<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2949<T> = UnionToIntersection2949<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2949<T extends unknown[], V> = [...T, V];

type TuplifyUnion2949<T, L = LastOf2949<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2949<TuplifyUnion2949<Exclude<T, L>>, L>;

type DeepPartial2949<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2949<T[P]> }
  : T;

type Paths2949<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2949<K, Paths2949<T[K], Prev2949[D]>> : never }[keyof T]
  : never;

type Prev2949 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2949<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2949 {
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

type ConfigPaths2949 = Paths2949<NestedConfig2949>;

interface HeavyProps2949 {
  config: DeepPartial2949<NestedConfig2949>;
  path?: ConfigPaths2949;
}

const HeavyComponent2949 = memo(function HeavyComponent2949({ config }: HeavyProps2949) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2949) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2949 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2949: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2949.displayName = 'HeavyComponent2949';
export default HeavyComponent2949;

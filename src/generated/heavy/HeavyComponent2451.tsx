'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2451<T> = T extends (infer U)[]
  ? DeepReadonlyArray2451<U>
  : T extends object
  ? DeepReadonlyObject2451<T>
  : T;

interface DeepReadonlyArray2451<T> extends ReadonlyArray<DeepReadonly2451<T>> {}

type DeepReadonlyObject2451<T> = {
  readonly [P in keyof T]: DeepReadonly2451<T[P]>;
};

type UnionToIntersection2451<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2451<T> = UnionToIntersection2451<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2451<T extends unknown[], V> = [...T, V];

type TuplifyUnion2451<T, L = LastOf2451<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2451<TuplifyUnion2451<Exclude<T, L>>, L>;

type DeepPartial2451<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2451<T[P]> }
  : T;

type Paths2451<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2451<K, Paths2451<T[K], Prev2451[D]>> : never }[keyof T]
  : never;

type Prev2451 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2451<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2451 {
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

type ConfigPaths2451 = Paths2451<NestedConfig2451>;

interface HeavyProps2451 {
  config: DeepPartial2451<NestedConfig2451>;
  path?: ConfigPaths2451;
}

const HeavyComponent2451 = memo(function HeavyComponent2451({ config }: HeavyProps2451) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2451) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2451 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2451: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2451.displayName = 'HeavyComponent2451';
export default HeavyComponent2451;

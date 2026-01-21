'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2771<T> = T extends (infer U)[]
  ? DeepReadonlyArray2771<U>
  : T extends object
  ? DeepReadonlyObject2771<T>
  : T;

interface DeepReadonlyArray2771<T> extends ReadonlyArray<DeepReadonly2771<T>> {}

type DeepReadonlyObject2771<T> = {
  readonly [P in keyof T]: DeepReadonly2771<T[P]>;
};

type UnionToIntersection2771<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2771<T> = UnionToIntersection2771<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2771<T extends unknown[], V> = [...T, V];

type TuplifyUnion2771<T, L = LastOf2771<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2771<TuplifyUnion2771<Exclude<T, L>>, L>;

type DeepPartial2771<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2771<T[P]> }
  : T;

type Paths2771<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2771<K, Paths2771<T[K], Prev2771[D]>> : never }[keyof T]
  : never;

type Prev2771 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2771<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2771 {
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

type ConfigPaths2771 = Paths2771<NestedConfig2771>;

interface HeavyProps2771 {
  config: DeepPartial2771<NestedConfig2771>;
  path?: ConfigPaths2771;
}

const HeavyComponent2771 = memo(function HeavyComponent2771({ config }: HeavyProps2771) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2771) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2771 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2771: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2771.displayName = 'HeavyComponent2771';
export default HeavyComponent2771;

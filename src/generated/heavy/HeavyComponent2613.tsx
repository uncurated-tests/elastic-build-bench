'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2613<T> = T extends (infer U)[]
  ? DeepReadonlyArray2613<U>
  : T extends object
  ? DeepReadonlyObject2613<T>
  : T;

interface DeepReadonlyArray2613<T> extends ReadonlyArray<DeepReadonly2613<T>> {}

type DeepReadonlyObject2613<T> = {
  readonly [P in keyof T]: DeepReadonly2613<T[P]>;
};

type UnionToIntersection2613<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2613<T> = UnionToIntersection2613<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2613<T extends unknown[], V> = [...T, V];

type TuplifyUnion2613<T, L = LastOf2613<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2613<TuplifyUnion2613<Exclude<T, L>>, L>;

type DeepPartial2613<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2613<T[P]> }
  : T;

type Paths2613<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2613<K, Paths2613<T[K], Prev2613[D]>> : never }[keyof T]
  : never;

type Prev2613 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2613<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2613 {
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

type ConfigPaths2613 = Paths2613<NestedConfig2613>;

interface HeavyProps2613 {
  config: DeepPartial2613<NestedConfig2613>;
  path?: ConfigPaths2613;
}

const HeavyComponent2613 = memo(function HeavyComponent2613({ config }: HeavyProps2613) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2613) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2613 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2613: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2613.displayName = 'HeavyComponent2613';
export default HeavyComponent2613;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14208<T> = T extends (infer U)[]
  ? DeepReadonlyArray14208<U>
  : T extends object
  ? DeepReadonlyObject14208<T>
  : T;

interface DeepReadonlyArray14208<T> extends ReadonlyArray<DeepReadonly14208<T>> {}

type DeepReadonlyObject14208<T> = {
  readonly [P in keyof T]: DeepReadonly14208<T[P]>;
};

type UnionToIntersection14208<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14208<T> = UnionToIntersection14208<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14208<T extends unknown[], V> = [...T, V];

type TuplifyUnion14208<T, L = LastOf14208<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14208<TuplifyUnion14208<Exclude<T, L>>, L>;

type DeepPartial14208<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14208<T[P]> }
  : T;

type Paths14208<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14208<K, Paths14208<T[K], Prev14208[D]>> : never }[keyof T]
  : never;

type Prev14208 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14208<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14208 {
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

type ConfigPaths14208 = Paths14208<NestedConfig14208>;

interface HeavyProps14208 {
  config: DeepPartial14208<NestedConfig14208>;
  path?: ConfigPaths14208;
}

const HeavyComponent14208 = memo(function HeavyComponent14208({ config }: HeavyProps14208) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14208) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14208 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14208: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14208.displayName = 'HeavyComponent14208';
export default HeavyComponent14208;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14189<T> = T extends (infer U)[]
  ? DeepReadonlyArray14189<U>
  : T extends object
  ? DeepReadonlyObject14189<T>
  : T;

interface DeepReadonlyArray14189<T> extends ReadonlyArray<DeepReadonly14189<T>> {}

type DeepReadonlyObject14189<T> = {
  readonly [P in keyof T]: DeepReadonly14189<T[P]>;
};

type UnionToIntersection14189<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14189<T> = UnionToIntersection14189<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14189<T extends unknown[], V> = [...T, V];

type TuplifyUnion14189<T, L = LastOf14189<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14189<TuplifyUnion14189<Exclude<T, L>>, L>;

type DeepPartial14189<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14189<T[P]> }
  : T;

type Paths14189<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14189<K, Paths14189<T[K], Prev14189[D]>> : never }[keyof T]
  : never;

type Prev14189 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14189<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14189 {
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

type ConfigPaths14189 = Paths14189<NestedConfig14189>;

interface HeavyProps14189 {
  config: DeepPartial14189<NestedConfig14189>;
  path?: ConfigPaths14189;
}

const HeavyComponent14189 = memo(function HeavyComponent14189({ config }: HeavyProps14189) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14189) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14189 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14189: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14189.displayName = 'HeavyComponent14189';
export default HeavyComponent14189;

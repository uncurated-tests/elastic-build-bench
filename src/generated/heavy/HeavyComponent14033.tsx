'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14033<T> = T extends (infer U)[]
  ? DeepReadonlyArray14033<U>
  : T extends object
  ? DeepReadonlyObject14033<T>
  : T;

interface DeepReadonlyArray14033<T> extends ReadonlyArray<DeepReadonly14033<T>> {}

type DeepReadonlyObject14033<T> = {
  readonly [P in keyof T]: DeepReadonly14033<T[P]>;
};

type UnionToIntersection14033<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14033<T> = UnionToIntersection14033<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14033<T extends unknown[], V> = [...T, V];

type TuplifyUnion14033<T, L = LastOf14033<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14033<TuplifyUnion14033<Exclude<T, L>>, L>;

type DeepPartial14033<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14033<T[P]> }
  : T;

type Paths14033<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14033<K, Paths14033<T[K], Prev14033[D]>> : never }[keyof T]
  : never;

type Prev14033 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14033<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14033 {
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

type ConfigPaths14033 = Paths14033<NestedConfig14033>;

interface HeavyProps14033 {
  config: DeepPartial14033<NestedConfig14033>;
  path?: ConfigPaths14033;
}

const HeavyComponent14033 = memo(function HeavyComponent14033({ config }: HeavyProps14033) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14033) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14033 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14033: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14033.displayName = 'HeavyComponent14033';
export default HeavyComponent14033;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14927<T> = T extends (infer U)[]
  ? DeepReadonlyArray14927<U>
  : T extends object
  ? DeepReadonlyObject14927<T>
  : T;

interface DeepReadonlyArray14927<T> extends ReadonlyArray<DeepReadonly14927<T>> {}

type DeepReadonlyObject14927<T> = {
  readonly [P in keyof T]: DeepReadonly14927<T[P]>;
};

type UnionToIntersection14927<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14927<T> = UnionToIntersection14927<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14927<T extends unknown[], V> = [...T, V];

type TuplifyUnion14927<T, L = LastOf14927<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14927<TuplifyUnion14927<Exclude<T, L>>, L>;

type DeepPartial14927<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14927<T[P]> }
  : T;

type Paths14927<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14927<K, Paths14927<T[K], Prev14927[D]>> : never }[keyof T]
  : never;

type Prev14927 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14927<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14927 {
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

type ConfigPaths14927 = Paths14927<NestedConfig14927>;

interface HeavyProps14927 {
  config: DeepPartial14927<NestedConfig14927>;
  path?: ConfigPaths14927;
}

const HeavyComponent14927 = memo(function HeavyComponent14927({ config }: HeavyProps14927) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14927) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14927 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14927: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14927.displayName = 'HeavyComponent14927';
export default HeavyComponent14927;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14621<T> = T extends (infer U)[]
  ? DeepReadonlyArray14621<U>
  : T extends object
  ? DeepReadonlyObject14621<T>
  : T;

interface DeepReadonlyArray14621<T> extends ReadonlyArray<DeepReadonly14621<T>> {}

type DeepReadonlyObject14621<T> = {
  readonly [P in keyof T]: DeepReadonly14621<T[P]>;
};

type UnionToIntersection14621<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14621<T> = UnionToIntersection14621<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14621<T extends unknown[], V> = [...T, V];

type TuplifyUnion14621<T, L = LastOf14621<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14621<TuplifyUnion14621<Exclude<T, L>>, L>;

type DeepPartial14621<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14621<T[P]> }
  : T;

type Paths14621<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14621<K, Paths14621<T[K], Prev14621[D]>> : never }[keyof T]
  : never;

type Prev14621 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14621<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14621 {
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

type ConfigPaths14621 = Paths14621<NestedConfig14621>;

interface HeavyProps14621 {
  config: DeepPartial14621<NestedConfig14621>;
  path?: ConfigPaths14621;
}

const HeavyComponent14621 = memo(function HeavyComponent14621({ config }: HeavyProps14621) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14621) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14621 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14621: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14621.displayName = 'HeavyComponent14621';
export default HeavyComponent14621;

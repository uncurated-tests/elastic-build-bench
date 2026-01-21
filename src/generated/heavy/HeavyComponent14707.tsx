'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14707<T> = T extends (infer U)[]
  ? DeepReadonlyArray14707<U>
  : T extends object
  ? DeepReadonlyObject14707<T>
  : T;

interface DeepReadonlyArray14707<T> extends ReadonlyArray<DeepReadonly14707<T>> {}

type DeepReadonlyObject14707<T> = {
  readonly [P in keyof T]: DeepReadonly14707<T[P]>;
};

type UnionToIntersection14707<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14707<T> = UnionToIntersection14707<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14707<T extends unknown[], V> = [...T, V];

type TuplifyUnion14707<T, L = LastOf14707<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14707<TuplifyUnion14707<Exclude<T, L>>, L>;

type DeepPartial14707<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14707<T[P]> }
  : T;

type Paths14707<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14707<K, Paths14707<T[K], Prev14707[D]>> : never }[keyof T]
  : never;

type Prev14707 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14707<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14707 {
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

type ConfigPaths14707 = Paths14707<NestedConfig14707>;

interface HeavyProps14707 {
  config: DeepPartial14707<NestedConfig14707>;
  path?: ConfigPaths14707;
}

const HeavyComponent14707 = memo(function HeavyComponent14707({ config }: HeavyProps14707) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14707) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14707 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14707: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14707.displayName = 'HeavyComponent14707';
export default HeavyComponent14707;

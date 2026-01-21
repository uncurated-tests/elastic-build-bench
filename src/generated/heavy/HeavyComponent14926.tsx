'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14926<T> = T extends (infer U)[]
  ? DeepReadonlyArray14926<U>
  : T extends object
  ? DeepReadonlyObject14926<T>
  : T;

interface DeepReadonlyArray14926<T> extends ReadonlyArray<DeepReadonly14926<T>> {}

type DeepReadonlyObject14926<T> = {
  readonly [P in keyof T]: DeepReadonly14926<T[P]>;
};

type UnionToIntersection14926<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14926<T> = UnionToIntersection14926<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14926<T extends unknown[], V> = [...T, V];

type TuplifyUnion14926<T, L = LastOf14926<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14926<TuplifyUnion14926<Exclude<T, L>>, L>;

type DeepPartial14926<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14926<T[P]> }
  : T;

type Paths14926<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14926<K, Paths14926<T[K], Prev14926[D]>> : never }[keyof T]
  : never;

type Prev14926 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14926<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14926 {
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

type ConfigPaths14926 = Paths14926<NestedConfig14926>;

interface HeavyProps14926 {
  config: DeepPartial14926<NestedConfig14926>;
  path?: ConfigPaths14926;
}

const HeavyComponent14926 = memo(function HeavyComponent14926({ config }: HeavyProps14926) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14926) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14926 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14926: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14926.displayName = 'HeavyComponent14926';
export default HeavyComponent14926;

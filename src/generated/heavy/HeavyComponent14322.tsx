'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14322<T> = T extends (infer U)[]
  ? DeepReadonlyArray14322<U>
  : T extends object
  ? DeepReadonlyObject14322<T>
  : T;

interface DeepReadonlyArray14322<T> extends ReadonlyArray<DeepReadonly14322<T>> {}

type DeepReadonlyObject14322<T> = {
  readonly [P in keyof T]: DeepReadonly14322<T[P]>;
};

type UnionToIntersection14322<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14322<T> = UnionToIntersection14322<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14322<T extends unknown[], V> = [...T, V];

type TuplifyUnion14322<T, L = LastOf14322<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14322<TuplifyUnion14322<Exclude<T, L>>, L>;

type DeepPartial14322<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14322<T[P]> }
  : T;

type Paths14322<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14322<K, Paths14322<T[K], Prev14322[D]>> : never }[keyof T]
  : never;

type Prev14322 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14322<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14322 {
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

type ConfigPaths14322 = Paths14322<NestedConfig14322>;

interface HeavyProps14322 {
  config: DeepPartial14322<NestedConfig14322>;
  path?: ConfigPaths14322;
}

const HeavyComponent14322 = memo(function HeavyComponent14322({ config }: HeavyProps14322) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14322) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14322 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14322: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14322.displayName = 'HeavyComponent14322';
export default HeavyComponent14322;

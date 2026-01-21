'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14570<T> = T extends (infer U)[]
  ? DeepReadonlyArray14570<U>
  : T extends object
  ? DeepReadonlyObject14570<T>
  : T;

interface DeepReadonlyArray14570<T> extends ReadonlyArray<DeepReadonly14570<T>> {}

type DeepReadonlyObject14570<T> = {
  readonly [P in keyof T]: DeepReadonly14570<T[P]>;
};

type UnionToIntersection14570<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14570<T> = UnionToIntersection14570<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14570<T extends unknown[], V> = [...T, V];

type TuplifyUnion14570<T, L = LastOf14570<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14570<TuplifyUnion14570<Exclude<T, L>>, L>;

type DeepPartial14570<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14570<T[P]> }
  : T;

type Paths14570<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14570<K, Paths14570<T[K], Prev14570[D]>> : never }[keyof T]
  : never;

type Prev14570 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14570<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14570 {
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

type ConfigPaths14570 = Paths14570<NestedConfig14570>;

interface HeavyProps14570 {
  config: DeepPartial14570<NestedConfig14570>;
  path?: ConfigPaths14570;
}

const HeavyComponent14570 = memo(function HeavyComponent14570({ config }: HeavyProps14570) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14570) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14570 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14570: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14570.displayName = 'HeavyComponent14570';
export default HeavyComponent14570;

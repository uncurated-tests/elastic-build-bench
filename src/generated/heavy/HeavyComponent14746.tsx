'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14746<T> = T extends (infer U)[]
  ? DeepReadonlyArray14746<U>
  : T extends object
  ? DeepReadonlyObject14746<T>
  : T;

interface DeepReadonlyArray14746<T> extends ReadonlyArray<DeepReadonly14746<T>> {}

type DeepReadonlyObject14746<T> = {
  readonly [P in keyof T]: DeepReadonly14746<T[P]>;
};

type UnionToIntersection14746<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14746<T> = UnionToIntersection14746<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14746<T extends unknown[], V> = [...T, V];

type TuplifyUnion14746<T, L = LastOf14746<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14746<TuplifyUnion14746<Exclude<T, L>>, L>;

type DeepPartial14746<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14746<T[P]> }
  : T;

type Paths14746<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14746<K, Paths14746<T[K], Prev14746[D]>> : never }[keyof T]
  : never;

type Prev14746 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14746<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14746 {
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

type ConfigPaths14746 = Paths14746<NestedConfig14746>;

interface HeavyProps14746 {
  config: DeepPartial14746<NestedConfig14746>;
  path?: ConfigPaths14746;
}

const HeavyComponent14746 = memo(function HeavyComponent14746({ config }: HeavyProps14746) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14746) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14746 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14746: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14746.displayName = 'HeavyComponent14746';
export default HeavyComponent14746;

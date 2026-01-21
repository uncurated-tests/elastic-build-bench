'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14364<T> = T extends (infer U)[]
  ? DeepReadonlyArray14364<U>
  : T extends object
  ? DeepReadonlyObject14364<T>
  : T;

interface DeepReadonlyArray14364<T> extends ReadonlyArray<DeepReadonly14364<T>> {}

type DeepReadonlyObject14364<T> = {
  readonly [P in keyof T]: DeepReadonly14364<T[P]>;
};

type UnionToIntersection14364<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14364<T> = UnionToIntersection14364<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14364<T extends unknown[], V> = [...T, V];

type TuplifyUnion14364<T, L = LastOf14364<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14364<TuplifyUnion14364<Exclude<T, L>>, L>;

type DeepPartial14364<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14364<T[P]> }
  : T;

type Paths14364<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14364<K, Paths14364<T[K], Prev14364[D]>> : never }[keyof T]
  : never;

type Prev14364 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14364<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14364 {
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

type ConfigPaths14364 = Paths14364<NestedConfig14364>;

interface HeavyProps14364 {
  config: DeepPartial14364<NestedConfig14364>;
  path?: ConfigPaths14364;
}

const HeavyComponent14364 = memo(function HeavyComponent14364({ config }: HeavyProps14364) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14364) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14364 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14364: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14364.displayName = 'HeavyComponent14364';
export default HeavyComponent14364;

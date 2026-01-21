'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14635<T> = T extends (infer U)[]
  ? DeepReadonlyArray14635<U>
  : T extends object
  ? DeepReadonlyObject14635<T>
  : T;

interface DeepReadonlyArray14635<T> extends ReadonlyArray<DeepReadonly14635<T>> {}

type DeepReadonlyObject14635<T> = {
  readonly [P in keyof T]: DeepReadonly14635<T[P]>;
};

type UnionToIntersection14635<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14635<T> = UnionToIntersection14635<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14635<T extends unknown[], V> = [...T, V];

type TuplifyUnion14635<T, L = LastOf14635<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14635<TuplifyUnion14635<Exclude<T, L>>, L>;

type DeepPartial14635<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14635<T[P]> }
  : T;

type Paths14635<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14635<K, Paths14635<T[K], Prev14635[D]>> : never }[keyof T]
  : never;

type Prev14635 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14635<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14635 {
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

type ConfigPaths14635 = Paths14635<NestedConfig14635>;

interface HeavyProps14635 {
  config: DeepPartial14635<NestedConfig14635>;
  path?: ConfigPaths14635;
}

const HeavyComponent14635 = memo(function HeavyComponent14635({ config }: HeavyProps14635) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14635) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14635 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14635: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14635.displayName = 'HeavyComponent14635';
export default HeavyComponent14635;

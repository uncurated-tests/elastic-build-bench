'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14075<T> = T extends (infer U)[]
  ? DeepReadonlyArray14075<U>
  : T extends object
  ? DeepReadonlyObject14075<T>
  : T;

interface DeepReadonlyArray14075<T> extends ReadonlyArray<DeepReadonly14075<T>> {}

type DeepReadonlyObject14075<T> = {
  readonly [P in keyof T]: DeepReadonly14075<T[P]>;
};

type UnionToIntersection14075<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14075<T> = UnionToIntersection14075<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14075<T extends unknown[], V> = [...T, V];

type TuplifyUnion14075<T, L = LastOf14075<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14075<TuplifyUnion14075<Exclude<T, L>>, L>;

type DeepPartial14075<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14075<T[P]> }
  : T;

type Paths14075<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14075<K, Paths14075<T[K], Prev14075[D]>> : never }[keyof T]
  : never;

type Prev14075 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14075<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14075 {
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

type ConfigPaths14075 = Paths14075<NestedConfig14075>;

interface HeavyProps14075 {
  config: DeepPartial14075<NestedConfig14075>;
  path?: ConfigPaths14075;
}

const HeavyComponent14075 = memo(function HeavyComponent14075({ config }: HeavyProps14075) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14075) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14075 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14075: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14075.displayName = 'HeavyComponent14075';
export default HeavyComponent14075;

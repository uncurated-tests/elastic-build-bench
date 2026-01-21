'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14060<T> = T extends (infer U)[]
  ? DeepReadonlyArray14060<U>
  : T extends object
  ? DeepReadonlyObject14060<T>
  : T;

interface DeepReadonlyArray14060<T> extends ReadonlyArray<DeepReadonly14060<T>> {}

type DeepReadonlyObject14060<T> = {
  readonly [P in keyof T]: DeepReadonly14060<T[P]>;
};

type UnionToIntersection14060<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14060<T> = UnionToIntersection14060<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14060<T extends unknown[], V> = [...T, V];

type TuplifyUnion14060<T, L = LastOf14060<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14060<TuplifyUnion14060<Exclude<T, L>>, L>;

type DeepPartial14060<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14060<T[P]> }
  : T;

type Paths14060<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14060<K, Paths14060<T[K], Prev14060[D]>> : never }[keyof T]
  : never;

type Prev14060 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14060<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14060 {
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

type ConfigPaths14060 = Paths14060<NestedConfig14060>;

interface HeavyProps14060 {
  config: DeepPartial14060<NestedConfig14060>;
  path?: ConfigPaths14060;
}

const HeavyComponent14060 = memo(function HeavyComponent14060({ config }: HeavyProps14060) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14060) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14060 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14060: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14060.displayName = 'HeavyComponent14060';
export default HeavyComponent14060;

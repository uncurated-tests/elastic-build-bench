'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14579<T> = T extends (infer U)[]
  ? DeepReadonlyArray14579<U>
  : T extends object
  ? DeepReadonlyObject14579<T>
  : T;

interface DeepReadonlyArray14579<T> extends ReadonlyArray<DeepReadonly14579<T>> {}

type DeepReadonlyObject14579<T> = {
  readonly [P in keyof T]: DeepReadonly14579<T[P]>;
};

type UnionToIntersection14579<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14579<T> = UnionToIntersection14579<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14579<T extends unknown[], V> = [...T, V];

type TuplifyUnion14579<T, L = LastOf14579<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14579<TuplifyUnion14579<Exclude<T, L>>, L>;

type DeepPartial14579<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14579<T[P]> }
  : T;

type Paths14579<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14579<K, Paths14579<T[K], Prev14579[D]>> : never }[keyof T]
  : never;

type Prev14579 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14579<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14579 {
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

type ConfigPaths14579 = Paths14579<NestedConfig14579>;

interface HeavyProps14579 {
  config: DeepPartial14579<NestedConfig14579>;
  path?: ConfigPaths14579;
}

const HeavyComponent14579 = memo(function HeavyComponent14579({ config }: HeavyProps14579) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14579) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14579 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14579: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14579.displayName = 'HeavyComponent14579';
export default HeavyComponent14579;

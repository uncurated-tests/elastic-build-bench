'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14003<T> = T extends (infer U)[]
  ? DeepReadonlyArray14003<U>
  : T extends object
  ? DeepReadonlyObject14003<T>
  : T;

interface DeepReadonlyArray14003<T> extends ReadonlyArray<DeepReadonly14003<T>> {}

type DeepReadonlyObject14003<T> = {
  readonly [P in keyof T]: DeepReadonly14003<T[P]>;
};

type UnionToIntersection14003<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14003<T> = UnionToIntersection14003<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14003<T extends unknown[], V> = [...T, V];

type TuplifyUnion14003<T, L = LastOf14003<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14003<TuplifyUnion14003<Exclude<T, L>>, L>;

type DeepPartial14003<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14003<T[P]> }
  : T;

type Paths14003<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14003<K, Paths14003<T[K], Prev14003[D]>> : never }[keyof T]
  : never;

type Prev14003 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14003<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14003 {
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

type ConfigPaths14003 = Paths14003<NestedConfig14003>;

interface HeavyProps14003 {
  config: DeepPartial14003<NestedConfig14003>;
  path?: ConfigPaths14003;
}

const HeavyComponent14003 = memo(function HeavyComponent14003({ config }: HeavyProps14003) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14003) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14003 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14003: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14003.displayName = 'HeavyComponent14003';
export default HeavyComponent14003;

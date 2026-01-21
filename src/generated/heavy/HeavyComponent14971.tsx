'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14971<T> = T extends (infer U)[]
  ? DeepReadonlyArray14971<U>
  : T extends object
  ? DeepReadonlyObject14971<T>
  : T;

interface DeepReadonlyArray14971<T> extends ReadonlyArray<DeepReadonly14971<T>> {}

type DeepReadonlyObject14971<T> = {
  readonly [P in keyof T]: DeepReadonly14971<T[P]>;
};

type UnionToIntersection14971<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14971<T> = UnionToIntersection14971<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14971<T extends unknown[], V> = [...T, V];

type TuplifyUnion14971<T, L = LastOf14971<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14971<TuplifyUnion14971<Exclude<T, L>>, L>;

type DeepPartial14971<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14971<T[P]> }
  : T;

type Paths14971<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14971<K, Paths14971<T[K], Prev14971[D]>> : never }[keyof T]
  : never;

type Prev14971 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14971<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14971 {
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

type ConfigPaths14971 = Paths14971<NestedConfig14971>;

interface HeavyProps14971 {
  config: DeepPartial14971<NestedConfig14971>;
  path?: ConfigPaths14971;
}

const HeavyComponent14971 = memo(function HeavyComponent14971({ config }: HeavyProps14971) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14971) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14971 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14971: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14971.displayName = 'HeavyComponent14971';
export default HeavyComponent14971;

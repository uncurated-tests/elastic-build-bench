'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14813<T> = T extends (infer U)[]
  ? DeepReadonlyArray14813<U>
  : T extends object
  ? DeepReadonlyObject14813<T>
  : T;

interface DeepReadonlyArray14813<T> extends ReadonlyArray<DeepReadonly14813<T>> {}

type DeepReadonlyObject14813<T> = {
  readonly [P in keyof T]: DeepReadonly14813<T[P]>;
};

type UnionToIntersection14813<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14813<T> = UnionToIntersection14813<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14813<T extends unknown[], V> = [...T, V];

type TuplifyUnion14813<T, L = LastOf14813<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14813<TuplifyUnion14813<Exclude<T, L>>, L>;

type DeepPartial14813<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14813<T[P]> }
  : T;

type Paths14813<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14813<K, Paths14813<T[K], Prev14813[D]>> : never }[keyof T]
  : never;

type Prev14813 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14813<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14813 {
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

type ConfigPaths14813 = Paths14813<NestedConfig14813>;

interface HeavyProps14813 {
  config: DeepPartial14813<NestedConfig14813>;
  path?: ConfigPaths14813;
}

const HeavyComponent14813 = memo(function HeavyComponent14813({ config }: HeavyProps14813) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14813) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14813 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14813: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14813.displayName = 'HeavyComponent14813';
export default HeavyComponent14813;

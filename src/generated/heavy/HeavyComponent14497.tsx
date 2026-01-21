'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14497<T> = T extends (infer U)[]
  ? DeepReadonlyArray14497<U>
  : T extends object
  ? DeepReadonlyObject14497<T>
  : T;

interface DeepReadonlyArray14497<T> extends ReadonlyArray<DeepReadonly14497<T>> {}

type DeepReadonlyObject14497<T> = {
  readonly [P in keyof T]: DeepReadonly14497<T[P]>;
};

type UnionToIntersection14497<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14497<T> = UnionToIntersection14497<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14497<T extends unknown[], V> = [...T, V];

type TuplifyUnion14497<T, L = LastOf14497<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14497<TuplifyUnion14497<Exclude<T, L>>, L>;

type DeepPartial14497<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14497<T[P]> }
  : T;

type Paths14497<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14497<K, Paths14497<T[K], Prev14497[D]>> : never }[keyof T]
  : never;

type Prev14497 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14497<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14497 {
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

type ConfigPaths14497 = Paths14497<NestedConfig14497>;

interface HeavyProps14497 {
  config: DeepPartial14497<NestedConfig14497>;
  path?: ConfigPaths14497;
}

const HeavyComponent14497 = memo(function HeavyComponent14497({ config }: HeavyProps14497) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14497) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14497 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14497: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14497.displayName = 'HeavyComponent14497';
export default HeavyComponent14497;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14606<T> = T extends (infer U)[]
  ? DeepReadonlyArray14606<U>
  : T extends object
  ? DeepReadonlyObject14606<T>
  : T;

interface DeepReadonlyArray14606<T> extends ReadonlyArray<DeepReadonly14606<T>> {}

type DeepReadonlyObject14606<T> = {
  readonly [P in keyof T]: DeepReadonly14606<T[P]>;
};

type UnionToIntersection14606<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14606<T> = UnionToIntersection14606<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14606<T extends unknown[], V> = [...T, V];

type TuplifyUnion14606<T, L = LastOf14606<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14606<TuplifyUnion14606<Exclude<T, L>>, L>;

type DeepPartial14606<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14606<T[P]> }
  : T;

type Paths14606<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14606<K, Paths14606<T[K], Prev14606[D]>> : never }[keyof T]
  : never;

type Prev14606 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14606<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14606 {
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

type ConfigPaths14606 = Paths14606<NestedConfig14606>;

interface HeavyProps14606 {
  config: DeepPartial14606<NestedConfig14606>;
  path?: ConfigPaths14606;
}

const HeavyComponent14606 = memo(function HeavyComponent14606({ config }: HeavyProps14606) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14606) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14606 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14606: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14606.displayName = 'HeavyComponent14606';
export default HeavyComponent14606;

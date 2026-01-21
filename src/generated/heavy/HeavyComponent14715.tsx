'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14715<T> = T extends (infer U)[]
  ? DeepReadonlyArray14715<U>
  : T extends object
  ? DeepReadonlyObject14715<T>
  : T;

interface DeepReadonlyArray14715<T> extends ReadonlyArray<DeepReadonly14715<T>> {}

type DeepReadonlyObject14715<T> = {
  readonly [P in keyof T]: DeepReadonly14715<T[P]>;
};

type UnionToIntersection14715<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14715<T> = UnionToIntersection14715<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14715<T extends unknown[], V> = [...T, V];

type TuplifyUnion14715<T, L = LastOf14715<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14715<TuplifyUnion14715<Exclude<T, L>>, L>;

type DeepPartial14715<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14715<T[P]> }
  : T;

type Paths14715<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14715<K, Paths14715<T[K], Prev14715[D]>> : never }[keyof T]
  : never;

type Prev14715 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14715<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14715 {
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

type ConfigPaths14715 = Paths14715<NestedConfig14715>;

interface HeavyProps14715 {
  config: DeepPartial14715<NestedConfig14715>;
  path?: ConfigPaths14715;
}

const HeavyComponent14715 = memo(function HeavyComponent14715({ config }: HeavyProps14715) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14715) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14715 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14715: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14715.displayName = 'HeavyComponent14715';
export default HeavyComponent14715;

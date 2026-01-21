'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14163<T> = T extends (infer U)[]
  ? DeepReadonlyArray14163<U>
  : T extends object
  ? DeepReadonlyObject14163<T>
  : T;

interface DeepReadonlyArray14163<T> extends ReadonlyArray<DeepReadonly14163<T>> {}

type DeepReadonlyObject14163<T> = {
  readonly [P in keyof T]: DeepReadonly14163<T[P]>;
};

type UnionToIntersection14163<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14163<T> = UnionToIntersection14163<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14163<T extends unknown[], V> = [...T, V];

type TuplifyUnion14163<T, L = LastOf14163<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14163<TuplifyUnion14163<Exclude<T, L>>, L>;

type DeepPartial14163<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14163<T[P]> }
  : T;

type Paths14163<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14163<K, Paths14163<T[K], Prev14163[D]>> : never }[keyof T]
  : never;

type Prev14163 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14163<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14163 {
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

type ConfigPaths14163 = Paths14163<NestedConfig14163>;

interface HeavyProps14163 {
  config: DeepPartial14163<NestedConfig14163>;
  path?: ConfigPaths14163;
}

const HeavyComponent14163 = memo(function HeavyComponent14163({ config }: HeavyProps14163) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14163) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14163 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14163: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14163.displayName = 'HeavyComponent14163';
export default HeavyComponent14163;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14180<T> = T extends (infer U)[]
  ? DeepReadonlyArray14180<U>
  : T extends object
  ? DeepReadonlyObject14180<T>
  : T;

interface DeepReadonlyArray14180<T> extends ReadonlyArray<DeepReadonly14180<T>> {}

type DeepReadonlyObject14180<T> = {
  readonly [P in keyof T]: DeepReadonly14180<T[P]>;
};

type UnionToIntersection14180<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14180<T> = UnionToIntersection14180<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14180<T extends unknown[], V> = [...T, V];

type TuplifyUnion14180<T, L = LastOf14180<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14180<TuplifyUnion14180<Exclude<T, L>>, L>;

type DeepPartial14180<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14180<T[P]> }
  : T;

type Paths14180<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14180<K, Paths14180<T[K], Prev14180[D]>> : never }[keyof T]
  : never;

type Prev14180 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14180<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14180 {
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

type ConfigPaths14180 = Paths14180<NestedConfig14180>;

interface HeavyProps14180 {
  config: DeepPartial14180<NestedConfig14180>;
  path?: ConfigPaths14180;
}

const HeavyComponent14180 = memo(function HeavyComponent14180({ config }: HeavyProps14180) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14180) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14180 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14180: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14180.displayName = 'HeavyComponent14180';
export default HeavyComponent14180;

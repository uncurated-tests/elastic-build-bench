'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14001<T> = T extends (infer U)[]
  ? DeepReadonlyArray14001<U>
  : T extends object
  ? DeepReadonlyObject14001<T>
  : T;

interface DeepReadonlyArray14001<T> extends ReadonlyArray<DeepReadonly14001<T>> {}

type DeepReadonlyObject14001<T> = {
  readonly [P in keyof T]: DeepReadonly14001<T[P]>;
};

type UnionToIntersection14001<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14001<T> = UnionToIntersection14001<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14001<T extends unknown[], V> = [...T, V];

type TuplifyUnion14001<T, L = LastOf14001<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14001<TuplifyUnion14001<Exclude<T, L>>, L>;

type DeepPartial14001<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14001<T[P]> }
  : T;

type Paths14001<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14001<K, Paths14001<T[K], Prev14001[D]>> : never }[keyof T]
  : never;

type Prev14001 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14001<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14001 {
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

type ConfigPaths14001 = Paths14001<NestedConfig14001>;

interface HeavyProps14001 {
  config: DeepPartial14001<NestedConfig14001>;
  path?: ConfigPaths14001;
}

const HeavyComponent14001 = memo(function HeavyComponent14001({ config }: HeavyProps14001) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14001) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14001 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14001: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14001.displayName = 'HeavyComponent14001';
export default HeavyComponent14001;

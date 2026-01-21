'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14900<T> = T extends (infer U)[]
  ? DeepReadonlyArray14900<U>
  : T extends object
  ? DeepReadonlyObject14900<T>
  : T;

interface DeepReadonlyArray14900<T> extends ReadonlyArray<DeepReadonly14900<T>> {}

type DeepReadonlyObject14900<T> = {
  readonly [P in keyof T]: DeepReadonly14900<T[P]>;
};

type UnionToIntersection14900<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14900<T> = UnionToIntersection14900<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14900<T extends unknown[], V> = [...T, V];

type TuplifyUnion14900<T, L = LastOf14900<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14900<TuplifyUnion14900<Exclude<T, L>>, L>;

type DeepPartial14900<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14900<T[P]> }
  : T;

type Paths14900<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14900<K, Paths14900<T[K], Prev14900[D]>> : never }[keyof T]
  : never;

type Prev14900 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14900<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14900 {
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

type ConfigPaths14900 = Paths14900<NestedConfig14900>;

interface HeavyProps14900 {
  config: DeepPartial14900<NestedConfig14900>;
  path?: ConfigPaths14900;
}

const HeavyComponent14900 = memo(function HeavyComponent14900({ config }: HeavyProps14900) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14900) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14900 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14900: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14900.displayName = 'HeavyComponent14900';
export default HeavyComponent14900;

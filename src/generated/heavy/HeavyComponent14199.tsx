'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14199<T> = T extends (infer U)[]
  ? DeepReadonlyArray14199<U>
  : T extends object
  ? DeepReadonlyObject14199<T>
  : T;

interface DeepReadonlyArray14199<T> extends ReadonlyArray<DeepReadonly14199<T>> {}

type DeepReadonlyObject14199<T> = {
  readonly [P in keyof T]: DeepReadonly14199<T[P]>;
};

type UnionToIntersection14199<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14199<T> = UnionToIntersection14199<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14199<T extends unknown[], V> = [...T, V];

type TuplifyUnion14199<T, L = LastOf14199<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14199<TuplifyUnion14199<Exclude<T, L>>, L>;

type DeepPartial14199<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14199<T[P]> }
  : T;

type Paths14199<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14199<K, Paths14199<T[K], Prev14199[D]>> : never }[keyof T]
  : never;

type Prev14199 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14199<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14199 {
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

type ConfigPaths14199 = Paths14199<NestedConfig14199>;

interface HeavyProps14199 {
  config: DeepPartial14199<NestedConfig14199>;
  path?: ConfigPaths14199;
}

const HeavyComponent14199 = memo(function HeavyComponent14199({ config }: HeavyProps14199) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14199) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14199 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14199: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14199.displayName = 'HeavyComponent14199';
export default HeavyComponent14199;

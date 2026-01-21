'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14429<T> = T extends (infer U)[]
  ? DeepReadonlyArray14429<U>
  : T extends object
  ? DeepReadonlyObject14429<T>
  : T;

interface DeepReadonlyArray14429<T> extends ReadonlyArray<DeepReadonly14429<T>> {}

type DeepReadonlyObject14429<T> = {
  readonly [P in keyof T]: DeepReadonly14429<T[P]>;
};

type UnionToIntersection14429<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14429<T> = UnionToIntersection14429<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14429<T extends unknown[], V> = [...T, V];

type TuplifyUnion14429<T, L = LastOf14429<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14429<TuplifyUnion14429<Exclude<T, L>>, L>;

type DeepPartial14429<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14429<T[P]> }
  : T;

type Paths14429<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14429<K, Paths14429<T[K], Prev14429[D]>> : never }[keyof T]
  : never;

type Prev14429 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14429<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14429 {
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

type ConfigPaths14429 = Paths14429<NestedConfig14429>;

interface HeavyProps14429 {
  config: DeepPartial14429<NestedConfig14429>;
  path?: ConfigPaths14429;
}

const HeavyComponent14429 = memo(function HeavyComponent14429({ config }: HeavyProps14429) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14429) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14429 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14429: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14429.displayName = 'HeavyComponent14429';
export default HeavyComponent14429;

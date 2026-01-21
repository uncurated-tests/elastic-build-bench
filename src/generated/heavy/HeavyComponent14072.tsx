'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14072<T> = T extends (infer U)[]
  ? DeepReadonlyArray14072<U>
  : T extends object
  ? DeepReadonlyObject14072<T>
  : T;

interface DeepReadonlyArray14072<T> extends ReadonlyArray<DeepReadonly14072<T>> {}

type DeepReadonlyObject14072<T> = {
  readonly [P in keyof T]: DeepReadonly14072<T[P]>;
};

type UnionToIntersection14072<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14072<T> = UnionToIntersection14072<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14072<T extends unknown[], V> = [...T, V];

type TuplifyUnion14072<T, L = LastOf14072<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14072<TuplifyUnion14072<Exclude<T, L>>, L>;

type DeepPartial14072<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14072<T[P]> }
  : T;

type Paths14072<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14072<K, Paths14072<T[K], Prev14072[D]>> : never }[keyof T]
  : never;

type Prev14072 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14072<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14072 {
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

type ConfigPaths14072 = Paths14072<NestedConfig14072>;

interface HeavyProps14072 {
  config: DeepPartial14072<NestedConfig14072>;
  path?: ConfigPaths14072;
}

const HeavyComponent14072 = memo(function HeavyComponent14072({ config }: HeavyProps14072) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14072) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14072 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14072: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14072.displayName = 'HeavyComponent14072';
export default HeavyComponent14072;

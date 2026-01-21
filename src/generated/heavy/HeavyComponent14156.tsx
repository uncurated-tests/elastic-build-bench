'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14156<T> = T extends (infer U)[]
  ? DeepReadonlyArray14156<U>
  : T extends object
  ? DeepReadonlyObject14156<T>
  : T;

interface DeepReadonlyArray14156<T> extends ReadonlyArray<DeepReadonly14156<T>> {}

type DeepReadonlyObject14156<T> = {
  readonly [P in keyof T]: DeepReadonly14156<T[P]>;
};

type UnionToIntersection14156<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14156<T> = UnionToIntersection14156<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14156<T extends unknown[], V> = [...T, V];

type TuplifyUnion14156<T, L = LastOf14156<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14156<TuplifyUnion14156<Exclude<T, L>>, L>;

type DeepPartial14156<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14156<T[P]> }
  : T;

type Paths14156<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14156<K, Paths14156<T[K], Prev14156[D]>> : never }[keyof T]
  : never;

type Prev14156 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14156<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14156 {
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

type ConfigPaths14156 = Paths14156<NestedConfig14156>;

interface HeavyProps14156 {
  config: DeepPartial14156<NestedConfig14156>;
  path?: ConfigPaths14156;
}

const HeavyComponent14156 = memo(function HeavyComponent14156({ config }: HeavyProps14156) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14156) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14156 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14156: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14156.displayName = 'HeavyComponent14156';
export default HeavyComponent14156;

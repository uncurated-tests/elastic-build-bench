'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14536<T> = T extends (infer U)[]
  ? DeepReadonlyArray14536<U>
  : T extends object
  ? DeepReadonlyObject14536<T>
  : T;

interface DeepReadonlyArray14536<T> extends ReadonlyArray<DeepReadonly14536<T>> {}

type DeepReadonlyObject14536<T> = {
  readonly [P in keyof T]: DeepReadonly14536<T[P]>;
};

type UnionToIntersection14536<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14536<T> = UnionToIntersection14536<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14536<T extends unknown[], V> = [...T, V];

type TuplifyUnion14536<T, L = LastOf14536<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14536<TuplifyUnion14536<Exclude<T, L>>, L>;

type DeepPartial14536<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14536<T[P]> }
  : T;

type Paths14536<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14536<K, Paths14536<T[K], Prev14536[D]>> : never }[keyof T]
  : never;

type Prev14536 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14536<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14536 {
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

type ConfigPaths14536 = Paths14536<NestedConfig14536>;

interface HeavyProps14536 {
  config: DeepPartial14536<NestedConfig14536>;
  path?: ConfigPaths14536;
}

const HeavyComponent14536 = memo(function HeavyComponent14536({ config }: HeavyProps14536) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14536) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14536 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14536: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14536.displayName = 'HeavyComponent14536';
export default HeavyComponent14536;

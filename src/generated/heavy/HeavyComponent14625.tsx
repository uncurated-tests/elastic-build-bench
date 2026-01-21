'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14625<T> = T extends (infer U)[]
  ? DeepReadonlyArray14625<U>
  : T extends object
  ? DeepReadonlyObject14625<T>
  : T;

interface DeepReadonlyArray14625<T> extends ReadonlyArray<DeepReadonly14625<T>> {}

type DeepReadonlyObject14625<T> = {
  readonly [P in keyof T]: DeepReadonly14625<T[P]>;
};

type UnionToIntersection14625<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14625<T> = UnionToIntersection14625<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14625<T extends unknown[], V> = [...T, V];

type TuplifyUnion14625<T, L = LastOf14625<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14625<TuplifyUnion14625<Exclude<T, L>>, L>;

type DeepPartial14625<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14625<T[P]> }
  : T;

type Paths14625<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14625<K, Paths14625<T[K], Prev14625[D]>> : never }[keyof T]
  : never;

type Prev14625 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14625<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14625 {
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

type ConfigPaths14625 = Paths14625<NestedConfig14625>;

interface HeavyProps14625 {
  config: DeepPartial14625<NestedConfig14625>;
  path?: ConfigPaths14625;
}

const HeavyComponent14625 = memo(function HeavyComponent14625({ config }: HeavyProps14625) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14625) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14625 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14625: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14625.displayName = 'HeavyComponent14625';
export default HeavyComponent14625;

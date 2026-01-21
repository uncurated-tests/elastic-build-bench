'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14516<T> = T extends (infer U)[]
  ? DeepReadonlyArray14516<U>
  : T extends object
  ? DeepReadonlyObject14516<T>
  : T;

interface DeepReadonlyArray14516<T> extends ReadonlyArray<DeepReadonly14516<T>> {}

type DeepReadonlyObject14516<T> = {
  readonly [P in keyof T]: DeepReadonly14516<T[P]>;
};

type UnionToIntersection14516<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14516<T> = UnionToIntersection14516<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14516<T extends unknown[], V> = [...T, V];

type TuplifyUnion14516<T, L = LastOf14516<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14516<TuplifyUnion14516<Exclude<T, L>>, L>;

type DeepPartial14516<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14516<T[P]> }
  : T;

type Paths14516<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14516<K, Paths14516<T[K], Prev14516[D]>> : never }[keyof T]
  : never;

type Prev14516 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14516<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14516 {
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

type ConfigPaths14516 = Paths14516<NestedConfig14516>;

interface HeavyProps14516 {
  config: DeepPartial14516<NestedConfig14516>;
  path?: ConfigPaths14516;
}

const HeavyComponent14516 = memo(function HeavyComponent14516({ config }: HeavyProps14516) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14516) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14516 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14516: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14516.displayName = 'HeavyComponent14516';
export default HeavyComponent14516;

'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14006<T> = T extends (infer U)[]
  ? DeepReadonlyArray14006<U>
  : T extends object
  ? DeepReadonlyObject14006<T>
  : T;

interface DeepReadonlyArray14006<T> extends ReadonlyArray<DeepReadonly14006<T>> {}

type DeepReadonlyObject14006<T> = {
  readonly [P in keyof T]: DeepReadonly14006<T[P]>;
};

type UnionToIntersection14006<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14006<T> = UnionToIntersection14006<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14006<T extends unknown[], V> = [...T, V];

type TuplifyUnion14006<T, L = LastOf14006<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14006<TuplifyUnion14006<Exclude<T, L>>, L>;

type DeepPartial14006<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14006<T[P]> }
  : T;

type Paths14006<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14006<K, Paths14006<T[K], Prev14006[D]>> : never }[keyof T]
  : never;

type Prev14006 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14006<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14006 {
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

type ConfigPaths14006 = Paths14006<NestedConfig14006>;

interface HeavyProps14006 {
  config: DeepPartial14006<NestedConfig14006>;
  path?: ConfigPaths14006;
}

const HeavyComponent14006 = memo(function HeavyComponent14006({ config }: HeavyProps14006) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14006) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14006 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14006: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14006.displayName = 'HeavyComponent14006';
export default HeavyComponent14006;

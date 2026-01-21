'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14073<T> = T extends (infer U)[]
  ? DeepReadonlyArray14073<U>
  : T extends object
  ? DeepReadonlyObject14073<T>
  : T;

interface DeepReadonlyArray14073<T> extends ReadonlyArray<DeepReadonly14073<T>> {}

type DeepReadonlyObject14073<T> = {
  readonly [P in keyof T]: DeepReadonly14073<T[P]>;
};

type UnionToIntersection14073<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14073<T> = UnionToIntersection14073<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14073<T extends unknown[], V> = [...T, V];

type TuplifyUnion14073<T, L = LastOf14073<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14073<TuplifyUnion14073<Exclude<T, L>>, L>;

type DeepPartial14073<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14073<T[P]> }
  : T;

type Paths14073<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14073<K, Paths14073<T[K], Prev14073[D]>> : never }[keyof T]
  : never;

type Prev14073 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14073<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14073 {
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

type ConfigPaths14073 = Paths14073<NestedConfig14073>;

interface HeavyProps14073 {
  config: DeepPartial14073<NestedConfig14073>;
  path?: ConfigPaths14073;
}

const HeavyComponent14073 = memo(function HeavyComponent14073({ config }: HeavyProps14073) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14073) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14073 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14073: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14073.displayName = 'HeavyComponent14073';
export default HeavyComponent14073;

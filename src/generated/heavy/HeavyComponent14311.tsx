'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14311<T> = T extends (infer U)[]
  ? DeepReadonlyArray14311<U>
  : T extends object
  ? DeepReadonlyObject14311<T>
  : T;

interface DeepReadonlyArray14311<T> extends ReadonlyArray<DeepReadonly14311<T>> {}

type DeepReadonlyObject14311<T> = {
  readonly [P in keyof T]: DeepReadonly14311<T[P]>;
};

type UnionToIntersection14311<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14311<T> = UnionToIntersection14311<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14311<T extends unknown[], V> = [...T, V];

type TuplifyUnion14311<T, L = LastOf14311<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14311<TuplifyUnion14311<Exclude<T, L>>, L>;

type DeepPartial14311<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14311<T[P]> }
  : T;

type Paths14311<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14311<K, Paths14311<T[K], Prev14311[D]>> : never }[keyof T]
  : never;

type Prev14311 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14311<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14311 {
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

type ConfigPaths14311 = Paths14311<NestedConfig14311>;

interface HeavyProps14311 {
  config: DeepPartial14311<NestedConfig14311>;
  path?: ConfigPaths14311;
}

const HeavyComponent14311 = memo(function HeavyComponent14311({ config }: HeavyProps14311) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14311) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14311 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14311: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14311.displayName = 'HeavyComponent14311';
export default HeavyComponent14311;

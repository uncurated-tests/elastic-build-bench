'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14646<T> = T extends (infer U)[]
  ? DeepReadonlyArray14646<U>
  : T extends object
  ? DeepReadonlyObject14646<T>
  : T;

interface DeepReadonlyArray14646<T> extends ReadonlyArray<DeepReadonly14646<T>> {}

type DeepReadonlyObject14646<T> = {
  readonly [P in keyof T]: DeepReadonly14646<T[P]>;
};

type UnionToIntersection14646<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14646<T> = UnionToIntersection14646<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14646<T extends unknown[], V> = [...T, V];

type TuplifyUnion14646<T, L = LastOf14646<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14646<TuplifyUnion14646<Exclude<T, L>>, L>;

type DeepPartial14646<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14646<T[P]> }
  : T;

type Paths14646<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14646<K, Paths14646<T[K], Prev14646[D]>> : never }[keyof T]
  : never;

type Prev14646 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14646<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14646 {
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

type ConfigPaths14646 = Paths14646<NestedConfig14646>;

interface HeavyProps14646 {
  config: DeepPartial14646<NestedConfig14646>;
  path?: ConfigPaths14646;
}

const HeavyComponent14646 = memo(function HeavyComponent14646({ config }: HeavyProps14646) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14646) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14646 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14646: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14646.displayName = 'HeavyComponent14646';
export default HeavyComponent14646;

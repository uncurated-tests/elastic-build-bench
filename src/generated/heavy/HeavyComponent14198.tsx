'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14198<T> = T extends (infer U)[]
  ? DeepReadonlyArray14198<U>
  : T extends object
  ? DeepReadonlyObject14198<T>
  : T;

interface DeepReadonlyArray14198<T> extends ReadonlyArray<DeepReadonly14198<T>> {}

type DeepReadonlyObject14198<T> = {
  readonly [P in keyof T]: DeepReadonly14198<T[P]>;
};

type UnionToIntersection14198<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14198<T> = UnionToIntersection14198<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14198<T extends unknown[], V> = [...T, V];

type TuplifyUnion14198<T, L = LastOf14198<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14198<TuplifyUnion14198<Exclude<T, L>>, L>;

type DeepPartial14198<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14198<T[P]> }
  : T;

type Paths14198<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14198<K, Paths14198<T[K], Prev14198[D]>> : never }[keyof T]
  : never;

type Prev14198 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14198<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14198 {
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

type ConfigPaths14198 = Paths14198<NestedConfig14198>;

interface HeavyProps14198 {
  config: DeepPartial14198<NestedConfig14198>;
  path?: ConfigPaths14198;
}

const HeavyComponent14198 = memo(function HeavyComponent14198({ config }: HeavyProps14198) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14198) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14198 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14198: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14198.displayName = 'HeavyComponent14198';
export default HeavyComponent14198;

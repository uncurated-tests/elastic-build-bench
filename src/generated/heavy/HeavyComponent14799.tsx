'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14799<T> = T extends (infer U)[]
  ? DeepReadonlyArray14799<U>
  : T extends object
  ? DeepReadonlyObject14799<T>
  : T;

interface DeepReadonlyArray14799<T> extends ReadonlyArray<DeepReadonly14799<T>> {}

type DeepReadonlyObject14799<T> = {
  readonly [P in keyof T]: DeepReadonly14799<T[P]>;
};

type UnionToIntersection14799<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14799<T> = UnionToIntersection14799<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14799<T extends unknown[], V> = [...T, V];

type TuplifyUnion14799<T, L = LastOf14799<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14799<TuplifyUnion14799<Exclude<T, L>>, L>;

type DeepPartial14799<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14799<T[P]> }
  : T;

type Paths14799<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14799<K, Paths14799<T[K], Prev14799[D]>> : never }[keyof T]
  : never;

type Prev14799 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14799<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14799 {
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

type ConfigPaths14799 = Paths14799<NestedConfig14799>;

interface HeavyProps14799 {
  config: DeepPartial14799<NestedConfig14799>;
  path?: ConfigPaths14799;
}

const HeavyComponent14799 = memo(function HeavyComponent14799({ config }: HeavyProps14799) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14799) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14799 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14799: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14799.displayName = 'HeavyComponent14799';
export default HeavyComponent14799;

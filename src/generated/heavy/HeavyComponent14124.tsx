'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14124<T> = T extends (infer U)[]
  ? DeepReadonlyArray14124<U>
  : T extends object
  ? DeepReadonlyObject14124<T>
  : T;

interface DeepReadonlyArray14124<T> extends ReadonlyArray<DeepReadonly14124<T>> {}

type DeepReadonlyObject14124<T> = {
  readonly [P in keyof T]: DeepReadonly14124<T[P]>;
};

type UnionToIntersection14124<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14124<T> = UnionToIntersection14124<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14124<T extends unknown[], V> = [...T, V];

type TuplifyUnion14124<T, L = LastOf14124<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14124<TuplifyUnion14124<Exclude<T, L>>, L>;

type DeepPartial14124<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14124<T[P]> }
  : T;

type Paths14124<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14124<K, Paths14124<T[K], Prev14124[D]>> : never }[keyof T]
  : never;

type Prev14124 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14124<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14124 {
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

type ConfigPaths14124 = Paths14124<NestedConfig14124>;

interface HeavyProps14124 {
  config: DeepPartial14124<NestedConfig14124>;
  path?: ConfigPaths14124;
}

const HeavyComponent14124 = memo(function HeavyComponent14124({ config }: HeavyProps14124) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14124) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14124 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14124: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14124.displayName = 'HeavyComponent14124';
export default HeavyComponent14124;

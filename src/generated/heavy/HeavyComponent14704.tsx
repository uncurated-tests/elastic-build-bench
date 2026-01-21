'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14704<T> = T extends (infer U)[]
  ? DeepReadonlyArray14704<U>
  : T extends object
  ? DeepReadonlyObject14704<T>
  : T;

interface DeepReadonlyArray14704<T> extends ReadonlyArray<DeepReadonly14704<T>> {}

type DeepReadonlyObject14704<T> = {
  readonly [P in keyof T]: DeepReadonly14704<T[P]>;
};

type UnionToIntersection14704<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14704<T> = UnionToIntersection14704<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14704<T extends unknown[], V> = [...T, V];

type TuplifyUnion14704<T, L = LastOf14704<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14704<TuplifyUnion14704<Exclude<T, L>>, L>;

type DeepPartial14704<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14704<T[P]> }
  : T;

type Paths14704<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14704<K, Paths14704<T[K], Prev14704[D]>> : never }[keyof T]
  : never;

type Prev14704 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14704<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14704 {
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

type ConfigPaths14704 = Paths14704<NestedConfig14704>;

interface HeavyProps14704 {
  config: DeepPartial14704<NestedConfig14704>;
  path?: ConfigPaths14704;
}

const HeavyComponent14704 = memo(function HeavyComponent14704({ config }: HeavyProps14704) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14704) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14704 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14704: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14704.displayName = 'HeavyComponent14704';
export default HeavyComponent14704;

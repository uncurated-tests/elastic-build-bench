'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14037<T> = T extends (infer U)[]
  ? DeepReadonlyArray14037<U>
  : T extends object
  ? DeepReadonlyObject14037<T>
  : T;

interface DeepReadonlyArray14037<T> extends ReadonlyArray<DeepReadonly14037<T>> {}

type DeepReadonlyObject14037<T> = {
  readonly [P in keyof T]: DeepReadonly14037<T[P]>;
};

type UnionToIntersection14037<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14037<T> = UnionToIntersection14037<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14037<T extends unknown[], V> = [...T, V];

type TuplifyUnion14037<T, L = LastOf14037<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14037<TuplifyUnion14037<Exclude<T, L>>, L>;

type DeepPartial14037<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14037<T[P]> }
  : T;

type Paths14037<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14037<K, Paths14037<T[K], Prev14037[D]>> : never }[keyof T]
  : never;

type Prev14037 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14037<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14037 {
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

type ConfigPaths14037 = Paths14037<NestedConfig14037>;

interface HeavyProps14037 {
  config: DeepPartial14037<NestedConfig14037>;
  path?: ConfigPaths14037;
}

const HeavyComponent14037 = memo(function HeavyComponent14037({ config }: HeavyProps14037) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14037) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14037 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14037: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14037.displayName = 'HeavyComponent14037';
export default HeavyComponent14037;

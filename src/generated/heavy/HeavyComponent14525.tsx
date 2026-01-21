'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14525<T> = T extends (infer U)[]
  ? DeepReadonlyArray14525<U>
  : T extends object
  ? DeepReadonlyObject14525<T>
  : T;

interface DeepReadonlyArray14525<T> extends ReadonlyArray<DeepReadonly14525<T>> {}

type DeepReadonlyObject14525<T> = {
  readonly [P in keyof T]: DeepReadonly14525<T[P]>;
};

type UnionToIntersection14525<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14525<T> = UnionToIntersection14525<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14525<T extends unknown[], V> = [...T, V];

type TuplifyUnion14525<T, L = LastOf14525<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14525<TuplifyUnion14525<Exclude<T, L>>, L>;

type DeepPartial14525<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14525<T[P]> }
  : T;

type Paths14525<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14525<K, Paths14525<T[K], Prev14525[D]>> : never }[keyof T]
  : never;

type Prev14525 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14525<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14525 {
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

type ConfigPaths14525 = Paths14525<NestedConfig14525>;

interface HeavyProps14525 {
  config: DeepPartial14525<NestedConfig14525>;
  path?: ConfigPaths14525;
}

const HeavyComponent14525 = memo(function HeavyComponent14525({ config }: HeavyProps14525) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14525) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14525 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14525: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14525.displayName = 'HeavyComponent14525';
export default HeavyComponent14525;

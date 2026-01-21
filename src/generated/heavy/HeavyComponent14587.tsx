'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14587<T> = T extends (infer U)[]
  ? DeepReadonlyArray14587<U>
  : T extends object
  ? DeepReadonlyObject14587<T>
  : T;

interface DeepReadonlyArray14587<T> extends ReadonlyArray<DeepReadonly14587<T>> {}

type DeepReadonlyObject14587<T> = {
  readonly [P in keyof T]: DeepReadonly14587<T[P]>;
};

type UnionToIntersection14587<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14587<T> = UnionToIntersection14587<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14587<T extends unknown[], V> = [...T, V];

type TuplifyUnion14587<T, L = LastOf14587<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14587<TuplifyUnion14587<Exclude<T, L>>, L>;

type DeepPartial14587<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14587<T[P]> }
  : T;

type Paths14587<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14587<K, Paths14587<T[K], Prev14587[D]>> : never }[keyof T]
  : never;

type Prev14587 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14587<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14587 {
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

type ConfigPaths14587 = Paths14587<NestedConfig14587>;

interface HeavyProps14587 {
  config: DeepPartial14587<NestedConfig14587>;
  path?: ConfigPaths14587;
}

const HeavyComponent14587 = memo(function HeavyComponent14587({ config }: HeavyProps14587) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14587) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14587 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14587: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14587.displayName = 'HeavyComponent14587';
export default HeavyComponent14587;
